import csv


    
def main():
    I_NUMBERS = 0
    NAME_INDEX = 1

    stud = student('students.csv', I_NUMBERS)

    inum = str(input('Please enter an I-number (xx-xxx-xxxx): '))
    

    

    if inum not in stud:
        print("No such student")
    else:
        # Retrieve the student name that corresponds
        # to the I-Number that the user entered.
        value = stud[inum]
        name = value[NAME_INDEX]

        # Print the student name.
        print(name)

    # print(name)

def student(filename, key_column_index):
    dictionary = {}
    # student = []

    with open(filename, 'rt') as file:
        student = csv.reader(file)

        next(student)
        # 
        # stud = student_clean.split(',')
            # student.append(stud)
            # dictionary = line[0][1]
        
        for line in student:            
        # From the current row, retrieve
        # the column that contains the key.
            # clean_line = line.split(',')
            # key = clean_line[key_column_index]
            # name = clean_line[NAME_INDEX]

        # Store the data from the current row
        # into the dictionary.
            
            key = line[key_column_index]

            # Store the data from the current row
            # into the dictionary.
            dictionary[key] = line

            # dictionary[key][name] = line
            
    return dictionary

if __name__ == "__main__":
    main()

