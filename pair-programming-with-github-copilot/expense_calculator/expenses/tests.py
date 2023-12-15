# imports foir django_rest_framework tests
from rest_framework.test import APITestCase

from .models import Expense

"""
class Expense(models.Model):
    name = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    timestamp = models.DateTimeField(auto_now_add=True)
    # category choice field 
    CATEGORY_CHOICES = (
        ('FOOD', 'Food'),
        ('RENT', 'Rent'),
        ('TRAVEL', 'Travel'),
        ('OTHER', 'Other'),
    )
    category = models.CharField(max_length=100, choices=CATEGORY_CHOICES)

    def __str__(self):
        return f'{self.name} - {self.amount}'
"""

class ExpensesTestCase(APITestCase):
    def setUp(self):
        # create 3 expenses
       Expense.objects.bulk_create([
              Expense(name='Food', amount=100, category='FOOD'),
              Expense(name='Rent', amount=100, category='RENT'),
              Expense(name='Travel', amount=100, category='TRAVEL'),
         ])
    
    def test_expenses_list(self):
        response = self.client.get('/api/expenses/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 3)

    def test_expenses_detail(self):
        response = self.client.get('/api/expenses/1/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['name'], 'Food')
        self.assertEqual(response.data['amount'], '100.00')
        self.assertEqual(response.data['category'], 'FOOD')

    def test_expenses_create(self):
        response = self.client.post('/api/expenses/', {
            'name': 'Burger',
            'amount': '100',
            'category': 'FOOD'
        })
        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.data['name'], 'Burger')
        self.assertEqual(response.data['amount'], '100.00')
        self.assertEqual(response.data['category'], 'FOOD')
    
    def test_expenses_update(self):
        response = self.client.put('/api/expenses/1/', {
            'name': 'Burger',
            'amount': '100',
            'category': 'FOOD'
        })
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['name'], 'Burger')
        self.assertEqual(response.data['amount'], '100.00')
        self.assertEqual(response.data['category'], 'FOOD')
    
    def test_expenses_delete(self):
        response = self.client.delete('/api/expenses/1/')
        self.assertEqual(response.status_code, 204)
        self.assertEqual(len(Expense.objects.all()), 2)
        self.assertRaises(Expense.DoesNotExist, Expense.objects.get, id=1)
        response = self.client.get('/api/expenses/2/')
        self.assertEqual(response.status_code, 200)

    def tearDown(self):
        # delete all expenses
        Expense.objects.all().delete()