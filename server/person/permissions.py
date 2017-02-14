from rest_framework import permissions

    # def get_permissions(self):
    #     # allow non-authenticated user to create via POST
    #     return (AllowAny() if self.request.method == 'POST'
    #             else IsStaffOrTargetUser()),

class IsCreateOrStaffOrTargetUser(permissions.BasePermission):
    def has_permission(self, request, view):
        return view.action == 'create' or request.user.is_staff or request.user.is_anonymous() is not True

    def has_object_permission(self, request, view, obj):
        return request.user.is_staff or obj == request.user

class IsStaffOrTargetUser(permissions.BasePermission):
    def has_permission(self, request, view):
        # allow user to list all users if logged in user is staff
        return view.action == 'retrieve' or request.user.is_staff

    def has_object_permission(self, request, view, obj):
        # allow logged in user to view own details, allows staff to view all records
        return request.user.is_staff or obj == request.user


class IsStaffTargetUserOrSafe(permissions.BasePermission):

    def has_permission(self, request, view):
        print request
        print view
        if request.method in permissions.SAFE_METHODS:
            return True

        return request.user.is_anonymous() is not True

    def has_object_permission(self, request, view, obj):
        print request
        print view
        print obj
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.owner == request.user
