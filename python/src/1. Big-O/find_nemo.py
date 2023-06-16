import time

nemo = ["nemo"]
large_array = ["nemo"] * 100


def find_nemo(array):
    t0 = time.time()
    for item in array:
        if item == "nemo":
            print("Found NEMO")
        else:
            print("Nemo not Found!")

    t1 = time.time()
    print("Time taken ==", (t1 - t0), "Ms")


find_nemo(large_array)  # O(n)
