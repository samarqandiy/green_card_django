import random

def random_code():
    string = '0123456789'
    length = 10
    return "".join(random.sample(string, length))