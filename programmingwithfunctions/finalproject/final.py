def main():
    countwords('final.txt')

def countwords(filename):
    file = open('final.txt', 'rt')
    dictionary = dict()

    for line in file:
        lower = line.lower()
        exclaim = lower.replace('!', ' ')
        period = exclaim.replace('.', ' ')

        words = period.split(' ')

        for word in words:
            if word in dictionary:
                dictionary[word] = dictionary[word] + 1
            else:
                dictionary[word] = 1
                
    for key in list(dictionary.keys()):
        if dictionary[key] > 1:
            print(f'The word "{key}" is written {dictionary[key]} times.')
        else:
            print(f'The word "{key}" is written {dictionary[key]} time.')

if __name__ == '__main__':
    main()    