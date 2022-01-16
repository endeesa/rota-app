import logging

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    name = req.params.get('name')
    if not name:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            name = req_body.get('name')

    if name:
        return func.HttpResponse(f"Hello, {name}. This HTTP triggered function executed successfully.")
    else:
        return func.HttpResponse(
             "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.",
             status_code=200
        )


import json
from helpers.roster_generator import RosterGenerator


def main():
    result = prepare_schedule()
    print('Working...\n')
    print('Preparing to return result')
    print(f'Your full schedule: {result}')

def prepare_schedule(staff=5, sections=3, span=30):

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



if __name__ == '__main__':
    main()