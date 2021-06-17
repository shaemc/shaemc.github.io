from names import make_full_name, extract_given_name, extract_family_name
import pytest

def test_make_full_name():
    #assert make_full_name('Shae', 'Carnahan') == ('Carnahan;Shae')
    assert make_full_name('Heather', 'Whitlock') == ('Whitlock;Heather')

def test_extract_given_name():
    #assert extract_given_name('Carnahan; Shae') == ('Shae')
    assert extract_given_name('Whitlock;Heather') == ('Heather')
    
def test_extract_family_name():
    #assert extract_family_name('Carnahan; Shae') == ('Carnahan')
    assert extract_family_name('Whitlock;Heather') == ('Whitlock')

# Call the main function that is part of pytest so that
# the test functions in this file will start executing.
pytest.main(["-v", "--tb=line", "-rN", "test_names.py"])

