from sentences import get_determiner, get_noun, get_verb, get_prepositional_phrase, get_preposition
import pytest


def test_get_determiner():
    # Test the singular determiners.
    singular_determiners = ["the", "one"]
    # This loop will repeat the statements inside it 4 times.
    for _ in range(4):
        word = get_determiner(1)

        # Verify that the word returned from get_determiner is
        # one of the words in the singular_determiners list.
        assert word in singular_determiners

    # If a loop's counting variable is not used inside the
    # body of the loop, many programmers will use underscore
    # (_) as the variable name for the counting variable.

    # Test the plural determiners.
    plural_determiners = ["some", "many"]
    for _ in range(4):
        word = get_determiner(2)

        # Verify that the word returned from get_determiner
        # is one of the words in the plural_determiners list.
        assert word in plural_determiners

def test_get_noun():
    singular = ["adult", "bird", "boy", "car", "cat", "child", "dog", "girl", "man", "woman"]
    for _ in range(4):
        word = get_noun(1)

        # Verify that the word returned from get_determiner is
        # one of the words in the singular_determiners list.
        assert word in singular
    plural = ["adults", "birds", "boys", "cars", "cats",
        "children", "dogs", "girls", "men", "women"]
    for _ in range(4):
        word = get_noun(2)

        # Verify that the word returned from get_determiner
        # is one of the words in the plural_determiners list.
        assert word in plural

def test_get_verb():
    verb = ["drank", "ate", "grew", "laughed", "thought",
            "ran", "slept", "talked", "walked", "wrote"]
    for _ in range(4):
        word = get_verb(1,'past')

        # Verify that the word returned from get_determiner is
        # one of the words in the singular_determiners list.
        assert word in verb

    get_verb2 = ["drink", "eat", "grow", "laugh", "think",
        "run", "sleep", "talk", "walk", "write"]
    get_verbtwo = ["drinks", "eats", "grows", "laughs", "thinks",
        "runs", "sleeps", "talks", "walks", "writes"]
    for _ in range(4):
        word = get_verb(1, 'present')
        word2 = get_verb(2, 'present')
        # Verify that the word returned from get_determiner
        # is one of the words in the plural_determiners list.
        assert word in get_verb2
        assert word2 in get_verbtwo

    get_verb3 = ["will drink", "will eat", "will grow", "will laugh",
        "will think", "will run", "will sleep", "will talk",
        "will walk", "will write"]
    for _ in range(4):
        word = get_verb(1,'future')

        # Verify that the word returned from get_determiner
        # is one of the words in the plural_determiners list.
        assert word in get_verb3
    
def test_get_preposition():
    # Test the singular determiners.
    get_prep = ["about", "above", "across", "after", "along",
    "around", "at", "before", "behind", "below",
    "beyond", "by", "despite", "except", "for",
    "from", "in", "into", "near", "of",
    "off", "on", "onto", "out", "over",
    "past", "to", "under", "with", "without"]
    # This loop will repeat the statements inside it 4 times.
    for _ in range(4):
        word = get_preposition(1)

        # Verify that the word returned from get_determiner is
        # one of the words in the singular_determiners list.
        assert word in get_prep

def test_get_prepositional_phrase():
    # Test the singular determiners.
    # This loop will repeat the statements inside it 4 times.
    get_prep_phrase = get_preposition(1),get_determiner(1),get_noun(1).split(',')
    # This loop will repeat the statements inside it 4 times.
    for _ in range(4):
        word = get_prepositional_phrase(1)

        # Verify that the word returned from get_determiner is
        # one of the words in the singular_determiners list.
        assert word in get_prep_phrase

pytest.main()