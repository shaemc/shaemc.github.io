from final import countwords
import pytest

def test_countwords():
    assert countwords('') == (key, ':', d[key])

# Call the main function that is part of pytest so that
# the test functions in this file will start executing.
pytest.main(["-v", "--tb=line", "-rN", "test_final.py"])