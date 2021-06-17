"""
When you physically exercise to strengthen your heart, you
should maintain your heart rate within a range for at least 20
minutes. To find that range, subtract your age from 220. This
difference is your maximum heart rate per minute. Your heart
simply will not beat faster than this maximum (220 - age).
When exercising to strengthen your heart, you should keep your
heart rate between 65% and 85% of your heart's maximum.
"""

age = float(input('What is your age? '))
maxhr = 220 - age
lower = maxhr * 0.65
higher = maxhr * 0.85

print(f'When you exercise to strengthen your heart, you should keep your heart rate between {lower:.0f} and {higher:.0f} beats per minute.')

a = 1
b = 3
c = -2
result = a + b * 7 % 4 - c
print(result)