# WEEK 2
# import math

# def computecircumference(radius):
#     return math.pi * radius * 2

# circumference = computecircumference(5)

# print(circumference)


# WEEK 3

# z = 5

# def computeArea (w, l, h):
#     global z
#     z = 55
#     h = 5
#     volume = w * l * h
#     return volume, h

# print(computeArea(5, 7, z))

# print(z)


#WEEK 4
# from math import pi as PI
# print(PI)

#WEEK 6

# x = float(input('Please enter your favorite number: '))

# y = 15

# z = x * y / 2

# print(z)

# WEEK 9
# pip install pandas
# student = {
#     "name": "Johnny",
#     "number": 1212361297
# }

# print(student['name'])

# import pandas as pd
# df = pd.read_csv("w09water.csv") #this is an excel page that you do not have, if you want to test it then get one you do have :)
# print(df.dtypes)
# print(df.describe())

# print(df["meterSize"])

# df = pd.read_csv("w09water.csv")

# meterColumn = df["meterSize"] #the quotes are names in the csv file

# filteredDataFrame = df[(df["meterSize"] < 0.76) & (df['numberOfDays'] < 20)]

# filteredMeterColumn = df[meterColumn < 0.8] #this is another way of writing the line above!

# filteredNumberOfDays = df["numberOfDays"]

# shortenedDataFrame = filteredDataFrame[['meterSize', 'numberOfDays']]

# print(filteredMeterColumn)

#WEEK 10
# import math

# def main():
#     ## prompt user for how many circles they have
#     numberOfCircles = promptForNumberOfCircles()

#     ## get area of each
#     areas = loopForCircles(numberOfCircles)

#     ## display the area of each
#     print(areas)

# def loopForCircles(numberOfCircles):
#     areas = []
#     for _ in range(0, numberOfCircles):
#         r = promptForRadius()
#         a = computeCircleArea(r)
#         #print(a)
#         areas.append(a)
#     return areas

# def promptForRadius():
#     while True:
#         try:
#             rad = int(input('Please enter radius: '))
#             break
        
#         except ValueError:
#             print("Oops!  That was no valid number.  Try again...")

#     return rad

# def promptForNumberOfCircles():
#     while True:
#         try:
#             num = int(input('Please enter the number of circles you are working with: '))
#             break
        
#         except ValueError:
#             print("Oops!  That was no valid number.  Try again...")

#     return num

# def computeCircleArea(radius):
#     return math.pi * radius**2

# main()

# #WEEK 11
# student = {
#     "name": "ted",
#     "lastname": "jones",
#     "age": 5,
# }

# student2 = {
#     "name": "jennifer",
#     "lastname": "jones",
#     "age": 15,
# }

# newstudent('ted', 'jones', 5)

#better way to write for loops

def fahr_to_cels(f):
    return (f - 32) * (5/9)

fahr_temps = [72, 65, 71, 75, 82, 87, 68]
print(f"Fahrenheit: {fahr_temps}")

cels_temps = list(map(fahr_to_cels, fahr_temps))
cels_temps = [round(c) for c in cels_temps]
print(f'Celcius: {cels_temps}')