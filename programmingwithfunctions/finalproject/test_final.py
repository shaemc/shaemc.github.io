from final import countwords
import pytest

def test_countwords():
    assert countwords('final.txt') == ('The word used most in your file is "this", and it is used 4 times.')

# Call the main function that is part of pytest so that
# the test functions in this file will start executing.
pytest.main(["-v", "--tb=line", "-rN", "test_final.py"])