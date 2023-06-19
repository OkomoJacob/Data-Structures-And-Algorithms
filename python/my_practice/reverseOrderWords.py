def reverse_words(s):
    split_string = s.split(" ")
    stack = []

    for word in split_string:
        stack.append(word)

    final_string = " "
    while stack:
        current = stack.pop()
        if current:
            final_string += " " + current

    return final_string.strip()

print(reverse_words("the  sky is blue"))
