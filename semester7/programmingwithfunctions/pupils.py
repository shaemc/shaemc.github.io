import csv


# Each row in the pupils.csv file contains three elements.
# These are the indexes of the elements in each row.
GIVEN_NAME_INDEX = 0
SURNAME_INDEX = 1
BIRTHDATE_INDEX = 2

def main():
    students_list = read_compound_list('pupils.csv')
    student_birth = lambda birth_date: birth_date[BIRTHDATE_INDEX]
    sorted_list = sorted(students_list, key=student_birth)
    #this is printing by birthday!
    print_list(sorted_list)
    
    print()
    students_name = lambda name: name[GIVEN_NAME_INDEX]
    sorted_names = sorted(students_list, key=students_name)
    #this is printing by first name!
    print_list(sorted_names)

    print()
    students_lastname = lambda last: last[SURNAME_INDEX]
    sorted_last = sorted(students_list, key=students_lastname)
    #this is printing by last name!
    print_list(sorted_last)


    #this part is wrong!
    # print()
    # student_birth_month = lambda birth_date: birth_date[BIRTHDATE_INDEX:6]
    # sorted_months = sorted(students_list, key=student_birth_month)
    # #this is printing by month of birthday!
    # print_list(sorted_months)
    # print()

def read_compound_list(filename):
    """Read the text from a CSV file into a compound list.
    The compound list will contain small lists. Each small
    list will contain the data from one row of the CSV file.

    Parameter
        filename: the name of the CSV file to read.
    Return: the compound list
    """
    # Create an empty list.
    compound_list = []

    # Open the CSV file for reading.
    with open(filename, "rt") as csv_file:

        # Use the csv module to create a reader
        # object that will read from the opened file.
        reader = csv.reader(csv_file)

        # The first line of the CSV file contains column headings
        # and not a student's I-Number and name, so this statement
        # skips the first line of the CSV file.
        next(reader)

        # Process each row in the CSV file.
        for row in reader:

            # Append the current row at the end of the compound list.
            compound_list.append(row)

    return compound_list

def print_list(students_list):
    for line in students_list:
        print(line)


if __name__ == "__main__":
    main()        