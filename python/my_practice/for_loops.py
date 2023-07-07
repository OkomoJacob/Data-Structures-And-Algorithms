'''
Exxplaininmg simple for loops to Elphas Angaga
'''

items = ['bread', 'milk', 'sugar', 'salt']
prices = [20, 30, 40, 50]

total = 0
for item in range(len(items)):
    item_to_print = items[item]
    price_to_print = prices[item]
    
    total += price_to_print
    print(f'{item_to_print}: {price_to_print}')

print(f'\nTotal:  {total}')
    
# print(f'Total amount in shopping list: ' + str(total))

'''
bread: 20
milk: 30
sugar: 40
salt: 50

Total: 140
'''