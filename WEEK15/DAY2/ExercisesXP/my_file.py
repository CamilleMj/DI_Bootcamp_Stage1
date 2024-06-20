#Exercise 1: Currencies
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f'{self.amount} {self.currency}' + ('s' if self.amount != 1 else '')

    def __repr__(self):
        return f'{self.amount} {self.currency}'

    def __int__(self):
        return self.amount

    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            return Currency(self.currency, self.amount + other.amount)
        elif isinstance(other, (int, float)):
            return Currency(self.currency, self.amount + other)
        else:
            raise TypeError(f"Unsupported operand type(s) for +: 'Currency' and '{type(other).__name__}'")
        
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

#Exercise 3: String Module
import string
import random

def generate_random_string(length=5):
    letters = string.ascii_letters 
    random_string = ''.join(random.choice(letters) for _ in range(length))
    return random_string

random_string = generate_random_string()
print(random_string)

#Exercise 4 : Current Date
import datetime

current_day = datetime.date.today()
print(f"Today is the {current_day.day}/{current_day.month}")

#Exercise 5 : Amount Of Time Left Until January 1st
import datetime

def time_until_january_1():
    now = datetime.now()

    target_year = now.year + 1
    target_date = datetime(target_year, 1, 1)

    time_left = target_date - now

    days = time_left.days
    hours, remainder = divmod(time_left.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)

    if days == 1:
        days_str = "day"
    else:
        days_str = "days"

    time_left_str = f"the 1st of January is in {days} {days_str} and {hours:02}:{minutes:02}:{seconds:02} hours."
    return time_left_str

time_left = time_until_january_1()
print(time_left)

#Exercise 6 : Birthday And Minutes
import datetime

def minutes_lived(birthdate):
    birth_datetime = datetime.strptime(birthdate, '%Y-%m-%d')

    current_datetime = datetime.now()

    time_lived = current_datetime - birth_datetime

    minutes_lived = time_lived.total_seconds() / 60

    return int(minutes_lived) 

birthdate = '1999-12-05'
minutes = minutes_lived(birthdate)
print(f"You have lived approximately {minutes:,} minutes so far.")

#Exercise 7 : Faker Module
from faker import Faker

fake = Faker()
users = []

def add_user():
    user = {
        'name': fake.name(),
        'address': fake.address(),
        'language_code': fake.language_code()
    }
    users.append(user)

add_user()
add_user()
add_user()

print(users)
