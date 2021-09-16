def main():
    countwords('final.txt')

def countwords(filename):
    file = open('final.txt', 'rt')
    dictionary = dict()

    for line in file:
        lower = line.lower()
        exclaim = lower.replace('!', '')
        period = exclaim.replace('.', '')

        words = period.split(' ')

        for word in words:
            if word in dictionary:
                dictionary[word] = dictionary[word] + 1
            else:
                dictionary[word] = 1
    num = 0                
    for key in list(dictionary.keys()):
        number = dictionary[key]
        if number > 1:
            print(f'The word "{key}" is written {number} times.')
            if number > num:
                num = number
                word = key
        else:
            print(f'The word "{key}" is written {number} time.')

    output = f'The word used most in your file is "{word}", and it is used {num} times.'
    print(output)
    return output

if __name__ == '__main__':
    main()    