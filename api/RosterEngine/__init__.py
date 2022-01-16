import json
import http
import logging
from typing import Dict

import azure.functions as func
from lib.roster_generator import RosterGenerator


def prepare_schedule(staff=5, sections=3, span=30) -> Dict:

    # Dynamic computations
    total_slots = RosterGenerator.calculate_total_slots(span, sections)
    max_per_employee = RosterGenerator.calculate_slots_per_staff_member(
        total_slots,
        staff
    )
    freq_dict = RosterGenerator.create_frequency_map(staff)
    # To no of shifts randomly assigned to each employee
    shifts = list()
    gen = RosterGenerator()

    roster = gen.generate_rooster(
        total_slots,
        max_per_employee,
        freq_dict,
        staff
    )

    complete_schedule = gen.print_full_schedule(
        roster,
        span,
        sections
    )

    return complete_schedule


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    span = req.params.get('span')
    staff = req.params.get('staff')
    sections = req.params.get('sections')

    generated_roster = prepare_schedule(staff=int(staff), span=int(span), sections=int(sections))
    logging.debug(f"Successfully generated {len(generated_roster)} slots")

    return func.HttpResponse(
        json.dumps(generated_roster),
        status_code=http.HTTPStatus.OK,
        mimetype="application/json"
    )
