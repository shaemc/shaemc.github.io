def main():
    # Create and print a list named fruit.
    fruit_list = ["pear", "banana", "apple", "mango"]
    print(f"original: {fruit_list}")

    fruit_list.reverse()
    print(f"reversed: {fruit_list}")

    fruit_list.append("orange")
    print(f'with orange: {fruit_list}')

    app = fruit_list.index('apple')
    fruit_list.insert(app, 'cherry')
    print(f'insert cherry into list: {fruit_list}')

    fruit_list.remove('banana')
    print(f'without banana: {fruit_list}')

    lastfruit = fruit_list.pop()
    print(f'last fruit: {lastfruit} {fruit_list}')

    fruit_list.sort()
    print(f'sorted list: {fruit_list}')

    fruit_list.clear()
    print(f'cleared: {fruit_list}')

if __name__ == "__main__":
    main()