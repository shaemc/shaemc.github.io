import random

def append_random_numbers(numbers_list, quantity = 1):
    for i in range(quantity):
        rand = random.uniform(0, 100)
        rounded = round(rand, 1)
        numbers_list.append(rounded)
        
def main():
    randnums = [16.2, 75.1, 52.3]
    print(randnums) 

    append_random_numbers(randnums)
    print(randnums)

    append_random_numbers(randnums, 3)
    print(randnums)

if __name__ == "__main__":
    main()