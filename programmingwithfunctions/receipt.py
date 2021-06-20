import csv

def main():
    NUMBER_INDEX = 0
    NAME_INDEX = 1
    PRICE = 2

    products = read_products('products.csv', NUMBER_INDEX)
    print(products)
    print()
    process_request('request.csv', NUMBER_INDEX, products)
    

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
        
        print('Requested Items')
        for row in process:
            key = row[key_column_index]
            dictionary[key] = row[1]
        
            
            #for row in products:
            name = products[key][0]
            price = products[key][1]
            #request = dictionary[key]
            many = dictionary[key]
            print(f"{name}: {many} @ {price}")

    #return

if __name__ == "__main__":
    main()