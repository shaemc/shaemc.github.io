question = 1
badquestion = -1

def main():
    print('This program is an implementation of the Rosenberg Self-Esteem Scale. ')
    print('This program will show you ten statements that you could possibly apply to yourself. ')
    print()
    print('Please rate how much you agree with each of the statements by responding with one of these four letters: ')
    print('D means you strongly disagree with the statement. ')
    print('d means you disagree with the statement. ')
    print('a means you agree with the statement. ')
    print('A means you strongly agree with the statement.')
    
    print()
    print(f"Your score is {questions()}.")
    print("A score below 15 may indicate problematic low self-esteem.")

def questions():
    score = 0
    score += asknew("1. I feel that I am a person of worth, at least on an equal plane with others.", question)
    score += asknew('2. I feel that I have a number of good qualities. Enter D, d, a, or A: ', question)
    score += asknew('3. I feel that I have a number of good qualities. Enter D, d, a, or A: ', badquestion)
    score += asknew('4. I feel that I have a number of good qualities. Enter D, d, a, or A: ', question)
    score += asknew('5. I feel that I have a number of good qualities. Enter D, d, a, or A: ', badquestion)
    score += asknew('6. I feel that I have a number of good qualities. Enter D, d, a, or A: ', question)
    score += asknew('7. I feel that I have a number of good qualities. Enter D, d, a, or A: ', question)
    score += asknew('8. I feel that I have a number of good qualities. Enter D, d, a, or A: ', badquestion)
    score += asknew('9. I feel that I have a number of good qualities. Enter D, d, a, or A: ', badquestion)
    score += asknew('10. I feel that I have a number of good qualities. Enter D, d, a, or A: ', badquestion)
    return score

def asknew(statement, pos_or_neg):
    """Display one statement to the user and get the user's response.
    Then determine the score for the response and return the score.

    Parameters
        statement: The statement to show the user.
        pos_or_neg: Either the constant POSITIVE or NEGATIVE.
    Return: the score from the user's response to the statement.
    """
    print(statement)
    answer = input("Enter D, d, a, or A: ")
    score = 0
    if answer == 'D':
        score = 0
    elif answer == 'd':
        score = 1
    elif answer == 'a':
        score = 2
    elif answer == 'A':
        score = 3

    if pos_or_neg == badquestion:
        score = 3 - score

    return score


# If this file was executed like this:
# > python esteem.py
# then call the main function. However, if this file
# was simply imported, then skip the call to main.
if __name__ == "__main__":
    main()