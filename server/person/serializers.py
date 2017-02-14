from django.contrib.auth.models import Group
from django.conf import settings

from .models import User

from rest_framework import serializers


class SignupSerializer(serializers.Serializer):
    """
    Don't require email to be unique so visitor can signup multiple times,
    if misplace verification email.  Handle in view.
    """
    email = serializers.EmailField(max_length=255)
    password = serializers.CharField(max_length=128)
    first_name = serializers.CharField(max_length=30, default='',
        required=False)
    last_name = serializers.CharField(max_length=30, default='',
        required=False)

class ReadOnlyUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'url', 'first_name', 'last_name', 'email',)

class UserSerializer(serializers.HyperlinkedModelSerializer):

    claimurl = serializers.ReadOnlyField()

    class Meta:
        model = User
        fields = ('id', 'url', 'password', 'first_name', 'last_name', 'email', 'groups', 'claimurl')
        extra_kwargs = {
            'password': {'write_only': True},
            'email': {'required': True},
        }
        read_only_fields = ('id',)
        # read_only_fields = ('is_staff', 'is_superuser', 'is_active', 'date_joined',)

    def create(self, validated_data):
        first_name = validated_data.get('first_name', '')
        last_name = validated_data.get('last_name', '')
        user = User.objects.create(
            email=validated_data['email'],
            first_name=first_name,
            last_name=last_name
        )
        user.set_password(validated_data['password'])
        user.save()

        return user

class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)


class PasswordResetVerifiedSerializer(serializers.Serializer):
    code = serializers.CharField(max_length=40)
    password = serializers.CharField(max_length=128)


class PasswordChangeSerializer(serializers.Serializer):
    password = serializers.CharField(max_length=128)

#http://www.django-rest-framework.org/topics/3.0-announcement/
class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')
