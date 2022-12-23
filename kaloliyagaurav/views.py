from django.shortcuts import render
from kaloliyagaurav.models import Contact

# Create your views here.
def index(request):
    return render(request, "index.html")

def contact(request):
    if request.method == "POST":
        fullname = request.POST["contactme-fullname-input"]
        email = request.POST["contactme-email-input"]
        phoneNumber = request.POST["contactme-phone-number-input"]
        description = request.POST["contactme-description-input"]

        contact_details = Contact(fullname=fullname, email=email, phoneNumber=phoneNumber, description=description)
        contact_details.save()

    return render(request, "contact.html")