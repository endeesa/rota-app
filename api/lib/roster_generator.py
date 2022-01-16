from random import randint
import traceback


class RosterGenerator():
    """Auto generate work shifts given total number of shits & staff"""

    def __init__(self, span = 30, workers = 5, sections = 3):
        """Defaults to organisation with 5 employees
           and 5 sections in a span of 30 days.
        """
        self.cycle = span
        self.staff = workers
        self.departments = sections

        # Dynamically computed
        self.no_of_shifts = 0
        self.max_shifts_per_employee = 0
        self.schedule = list()
        self.occurence_map = dict()

    def __str__(self):
        return "roster: %s, %s, %s, %s"% (self.no_of_shifts, self.max_shifts_per_employee, self.schedule, self.occurence_map)

        
    @staticmethod
    def calculate_total_slots(cycle_in_days, no_of_sections):
        """Calculate total shifts in a given cycle e.g. 30 days * 3 sections"""
        try:
            result = cycle_in_days * no_of_sections
            #self.no_of_shifts = result
            return result
        except Exception as error:
            print(f'Failed to compute total no of slots: {error}')
            traceback.print_exc()
            return None
        
    @staticmethod
    def calculate_slots_per_staff_member(slots, workforce):
        """Computes max shifts per employee
        i.e. total_slots/total_staff_members
        """
        try:
            result = slots // workforce
            #self.max_shifts_per_employee = result
            return result
        except Exception as e:
            print(f'Slots per employee error: {e}')
            traceback.print_exc()
            return None

    @staticmethod
    def create_frequency_map(workforce, initial_value=0):
        result = dict()
        for i in range(1, workforce + 1):
            result[str(i)] = initial_value
        return result

    def print_full_schedule(self, roster, daily_groups, sections):
        schedule = dict()
        arr = roster.copy()

        for i in range(1, daily_groups + 1):
            schedule[str(i)] = self.create_daily_schedule(arr, sections)

        return schedule

    def generate_rooster(self, total_slots, max_no_of_shifts, frequency_dict, participants):
        rooster = list()
        excluded = list()
        track_occurence = frequency_dict

        for _ in range(total_slots):
            current_no = randint(1, participants)

            # Keep generating random no's if current
            # value has reached max occurence limit
            while(current_no in excluded):
                current_no = randint(1, participants)

            # Prevent elements that have reached limit from beomh
            track_occurence[str(current_no)] += 1
            if track_occurence[str(current_no)] >= max_no_of_shifts:
                excluded.append(current_no)

            rooster.append(current_no)

        self.schedule = rooster
        self.occurence_map = track_occurence
        return rooster

    def create_daily_schedule(self, arr, no_departments):
        day = list()

        while(len(day) < no_departments):
            index = randint(0, len(arr) - 1)
            selection = arr[index]

            if(selection not in day):
                day.append(arr.pop(index))
        return day
