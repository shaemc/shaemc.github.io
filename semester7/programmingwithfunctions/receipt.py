import csv

from datetime import datetime

currentdatetime = datetime.now()
storename = 'Inkom Emporium'

def main():
    NUMBER_INDEX = 0
    NAME_INDEX = 1
    PRICE = 2

    print()
    print(storename)
    products = read_products('products.csv', NUMBER_INDEX)
    print()
    process_request('request.csv', NUMBER_INDEX, products)

    print()
    print(f'Thank you for shopping at {storename}.')
    print(f"{currentdatetime:%A %I:%M %p}")
    print()

def read_products(filename, key_column_index):

    dictionary = {}

    with open(filename, 'rt') as product:
        
        product = csv.reader(product)
        
        next(product)

        for line in product:
            key = line[key_column_index]
            dictionary[key] = [line[1], line[2]]
    
    return dictionary

def process_request(filename, key_column_index, products):

    dictionary = {}
    with open(filename, 'rt') as process:
        
        process = csv.reader(process)
        
        next(process)
        
        items = []
        subtotal = []

        for row in process:
            key = row[key_column_index]
            dictionary[key] = row[1]
            name = products[key][0]
            price = products[key][1]
            many = dictionary[key]
            
            print(f"{name}: {many} @ {price}")

            items.append(float(many))
            fun = float(price) * float(many)
            subtotal.append(float(fun))
        
        sumlist = float(sum(items)) 
        sumsubtotal = float(sum(subtotal))  
        tax = float(sumsubtotal) * .06
        total = float(sumsubtotal) + tax

        print()
        print(f'Number of items: {sumlist:.0f}')
        print(f'Subtotal: {sumsubtotal}')
        print(f'Sales tax: {tax:.2f}')
        print(f'Total: {total:.2f}')

        payment = input ('What is the payment amount? $')
        change = (float(payment) - float(total))
        print (f'Change: ${change:.2f}')
        print ()

if __name__ == "__main__":
    main()