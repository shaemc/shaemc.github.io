import math

width = float(input('What is the width of the tire in mm? '))
ratio = float(input('What is the aspect ratio of the tire? '))
diameter = float(input('What is the diameter of the wheel in inches? '))

volume = math.pi * width ** 2 * ratio * (width * ratio + 2540 * diameter) / 10000000

print(f'The approximate volume is {volume:.1f} milliliters.')
print(f'You can fit {volume:.1f} milliliters of water in your tire! Congratulations!')

from datetime import datetime
current = datetime.now(tz=None)

with open ('volumes.txt', 'at') as volumes:
    print(f'{current.year}-{current.month}-{current.day}, {width}, {ratio}, {diameter}, {volume:.2f}', file=volumes)

    buying = input(f'Do you want to buy tires with the volume of {volume:.2f} (Y/N)? ')
    if buying == 'Y':
        with open ('volumes.txt', 'at') as phonenumber:
            phone = input('Please enter your phone number: ')
            print(f'{phone}', file=volumes)
    else:
        print('Thank you for your time today.')