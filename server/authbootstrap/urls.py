"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers, serializers, viewsets
# from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from django.contrib import admin

from person.views import UserViewSet, GroupViewSet, Signup
from person.views import SignupVerify, PasswordReset
from person.views import PasswordResetVerify, PasswordResetVerified, PasswordChange

admin.autodiscover()
admin.site.site_header = 'Auth Bootstrap'

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)

class ObtainAuthTokenUserId(ObtainAuthToken):
    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'userId': user.id
        })

obtain_auth_token_user_id = ObtainAuthTokenUserId.as_view()


urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/token-auth/', obtain_auth_token_user_id),
    url(r'^api/signup/$', Signup.as_view(), name='person-signup'),
    url(r'^api/signup/verify/$', SignupVerify.as_view(), name='signup-verify'),
    url(r'^api/password/reset/$', PasswordReset.as_view(), name='password-reset'),
    url(r'^api/password/reset/verify/$', PasswordResetVerify.as_view(), name='password-reset-verify'),
    url(r'^api/password/reset/verified/$', PasswordResetVerified.as_view(), name='password-reset-verified'),
    url(r'^api/password/change/$', PasswordChange.as_view(), name='password-change'),
    url(r'^docs/', include('rest_framework_swagger.urls'))
]
