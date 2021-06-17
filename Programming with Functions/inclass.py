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
student = {
    "name": "Johnny",
    "number": 1212361297
}

print(student['name'])

import pandas as pd
df = pd.read_csv("w09water.csv") #this is an excel page that you do not have, if you want to test it then get one you do have :)
print(df.dtypes)
print(df.describe())

print(df["meterSize"])

df = pd.read_csv("w09water.csv")

meterColumn = df["meterSize"] #the quotes are names in the csv file

filteredDataFrame = df[(df["meterSize"] < 0.76) & (df['numberOfDays'] < 20)]

filteredMeterColumn = df[meterColumn < 0.8] #this is another way of writing the line above!

filteredNumberOfDays = df["numberOfDays"]

shortenedDataFrame = filteredDataFrame[['meterSize', 'numberOfDays']]

print(filteredMeterColumn)