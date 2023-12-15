from rest_framework.viewsets import ModelViewSet

from .serializers import ExpenseSerializer
from .models import Expense

class ExpenseViewSet(ModelViewSet):
    """
    API endpoint that allows expenses to be viewed or edited.
    """
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer