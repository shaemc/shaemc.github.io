import math

items = int(input('How many manufactured items do you have? '))
box = int(input('How many items will you pack per box? '))
boxes = math.ceil(items / box)

print(f'For {items} items, packing {box} per box, you will need {boxes:.0f} boxes.')