def main():
    text_list = read_list('provinces.txt')

    print(text_list)

    print()

    text_list.pop(0)

    text_list.pop()

    print(text_list)

    for i in range(len(text_list)):

        if text_list[i] == 'AB':
            text_list[i] = 'Alberta'
    
    number = text_list.count('Alberta')

    print(f'Alberta occurs {number} times in the modified list.')

def read_list(filename):

    text_list = []

    with open('provinces.txt', 'rt') as provinces:

        for line in provinces:

            clean_line = line.strip()

            text_list.append(clean_line)

        return text_list

if __name__ == '__main__':
    main()