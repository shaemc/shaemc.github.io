def main():
    start = float(input('What is the starting odometer? '))
    end = float(input('What is the ending odometer? '))
    fuel = float(input('What is the fuel amount at? '))
    
    print(f'{miles_per_gallon(start, end, fuel):.1f} miles per gallon.')
    gallon = miles_per_gallon(start, end, fuel)
    print(f'{lp100k_from_mpg(gallon):.2f} liters per 100 kilometers.')
    
    pass


def miles_per_gallon(start, end, fuel):
    mpg = (end - start) / fuel
    return mpg

def lp100k_from_mpg(gallon):
    lp100k = 235.215 / gallon
    return lp100k


# Call the main function so that
# this program will start executing.
main()