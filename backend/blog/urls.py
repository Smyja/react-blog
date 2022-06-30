
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import include,path


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/v1/', include('dj_rest_auth.urls')),
    path('api/v1/signup/', include('dj_rest_auth.registration.urls')),
    # path('accounts/', include('allauth.urls')),
    path("api/blog/",include("newsletter.urls",namespace="newsletter"))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)