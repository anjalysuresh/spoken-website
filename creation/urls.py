# Third Party Stuff
from django.conf.urls import include, url
from creation.views import *
from creation.script import *

app_name = 'creation'
urlpatterns = [
    # Main pages dispatcher
    url(r'^$',  creationhome, name="creationhome"),

    # Contributor part
    url(r'^upload/$',  upload_index, name="upload_index"),
    url(r'^upload/tutorial/(\d+)/$',  upload_tutorial, name="upload_tutorial"),
    url(r'^upload/outline/(\d+)/$',  upload_outline, name="upload_outline"),
    url(r'^upload/script/(\d+)/$',  upload_script, name="upload_script"),
    url(r'^upload/timed-script/$',  upload_timed_script, name="upload_timed_script"),
    url(r'^upload/timed-script/(\d+)/save/$',  save_timed_script, name="save_timed_script"),
    url(r'^upload/keywords/(\d+)/$',  upload_keywords, name="upload_keywords"),
    url(r'^upload/prerequisite/(\d+)/$',  upload_prerequisite, name="upload_prerequisite"),
    url(r'^upload/component/(\d+)/(\w+)/$',  upload_component, name="upload_component"),
    url(r'^mark/notrequired/(\d+)/(\d+)/(\w+)/$',  mark_notrequired, name="mark_notrequired"),
    url(r'^view/component/(\d+)/(\w+)/$',  view_component, name="view_component"),
    url(r'^upload/needimprovement/$',  tutorials_needimprovement, name="tutorials_needimprovement"),
    url(r'^upload/contributed/$',  tutorials_contributed, name="tutorials_contributed"),
    url(r'^upload/pending-tutorials/$',  tutorials_pending, name="tutorials_pending"),
    url(r'^upload-publish-outline/$',  upload_publish_outline, name="upload_publish_outline"),
    url(r'^list-missing-script/$', list_missing_script, name="list_missing_script"),
    url(r'^ajax-upload-foss/$',  ajax_upload_foss, name="ajax_upload_foss"),
    url(r'^ajax-upload-prerequisite/$',  ajax_upload_prerequisite, name="ajax_upload_prerequisite"),
    url(r'^ajax-upload-timed-script/$',  ajax_upload_timed_script, name="ajax_upload_timed_script"),
    url(r'^ajax-get-keywords/$',  ajax_get_keywords, name="ajax_get_keywords"),
    url(r'^view_brochure/$',  view_brochure, name="view_brochure"),

    # Admin Reviewer part
    url(r'^admin-review/$',  admin_review_index, name="admin_review_index"),
    url(r'^admin-review/reviewed/$',  admin_reviewed_video, name="admin_reviewed_video"),
    url(r'^admin-review/video/(\d+)/$',  admin_review_video, name="admin_review_video"),

    # Domain Reviewer part
    url(r'^domain-review/$',  domain_review_index, name="domain_review_index"),
    url(r'^domain-review/reviewed/$',  domain_reviewed_tutorials, name="domain_reviewed_tutorials"),
    url(r'^domain-review/tutorial/(\d+)/$',  domain_review_tutorial, name="domain_review_tutorial"),
    url(r'^domain-review/component/(\d+)/(\w+)/$',  domain_review_component, name="domain_review_component"),

    # Quality Reviewer part
    url(r'^quality-review/$',  quality_review_index, name="quality_review_index"),
    url(r'^quality-review/(\d+)/$',  quality_review_index, name="quality_review_index"),
    url(r'^quality-review/reviewed/$',  quality_reviewed_tutorials, name="quality_reviewed_tutorials"),
    url(r'^quality-review/tutorial/(\d+)/$',  quality_review_tutorial, name="quality_review_tutorial"),
    url(r'^quality-review/tutorial/publish/index/$',  publish_tutorial_index, name="publish_tutorial_index"),
    url(r'^quality-review/tutorial/publish/(\d+)/$',  publish_tutorial, name="publish_tutorial"),
    url(r'^quality-review/component/(\d+)/(\w+)/$',  quality_review_component, name="quality_review_component"),
    url(r'^public-review/tutorial/index/$',  public_review_tutorial_index, name="public_review_tutorial_index"),
    url(r'^public-review/tutorial/(\d+)/$',  public_review_tutorial, name="public_review_tutorial"),
    url(r'^public-review/publish/(\d+)/$',  public_review_publish, name="public_review_publish"),
    url(r'^public-review/mark-as-pending/(\d+)/$',  public_review_mark_as_pending, name="public_review_mark_as_pending"),
    url(r'^public-review/list/$',  public_review_list, name="public_review_list"),

    # Administrator part
    url(r'^role/requests/$',  creation_list_role_requests, name="creation_list_role_requests"),
    url(r'^update-prerequisite/$',  update_prerequisite, name="update_prerequisite"),
    url(r'^update-keywords/$',  update_keywords, name="update_keywords"),
    url(r'^update-manual/(\w+)/$',  update_sheet, name="update_sheet"),
    url(r'^update-assignment/$',  update_assignment, name="update_assignment"),
    url(r'^update-codefiles/$',  update_codefiles, name="update_codefiles"),
    url(r'^role/requests/([a-zA-Z-]+)/$',  creation_list_role_requests, name="creation_list_role_requests"),
    url(r'^role/accept/(\d+)/$',  creation_accept_role_request, name="creation_accept_role_request"),
    url(r'^role/reject/(\d+)/$',  creation_reject_role_request, name="creation_reject_role_request"),
    url(r'^role/revoke/([a-zA-Z-]+)/$',  creation_revoke_role_request, name="creation_revoke_role_request"),
    url(r'^admin/tutorial/status/pending/$',  creation_change_published_to_pending, name="creation_change_published_to_pending"),
    url(r'^admin/tutorial/component/status/$',  creation_change_component_status, name="creation_change_component_status"),
    url(r'^ajax-publish-to-pending/$',  ajax_publish_to_pending, name="ajax_publish_to_pending"),
    url(r'^ajax-change-component-status/$',  ajax_change_component_status, name="ajax_change_component_status"),
    url(r'^ajax-manual-language/$',  ajax_manual_language, name="ajax_manual_language"),
    url(r'^ajax-get-tutorials/$',  ajax_get_tutorials, name="ajax_get_tutorials"),
    url(r'^update-common-component/$', update_common_component, name="update_common_component"),

    # Common to Domain & Admin reviewer parts
    url(r'^accept-all/(\w+)/(\d+)/$',  accept_all, name="accept_all"),
    url(r'^delete-notification/(\w+)/(\d+)/$',  delete_creation_notification, name="delete_creation_notification"),
    url(r'^clear-notifications/(\w+)/$',  clear_creation_notification, name="clear_creation_notification"),
    url(r'^tutorial/view/([0-9a-zA-Z-+%\(\).]+)/([0-9a-zA-Z-+%\(\).]+)/([a-zA-Z-]+)/$',  creation_view_tutorial, name="creation_view_tutorial"),
    url(r'^init/$',  init_creation_app, name="init_creation_app"),
    url(r'^role/add/([a-zA-Z-]+)/$',  creation_add_role, name="creation_add_role"),
    url(r'^collaborate/$',  collaborate, name="collaborate"),
    url(r'^suggest-a-topic/$',  suggest_topic, name="suggest_topic"),
    url(r'^suggest-an-example/$',  suggest_example, name="suggest_example"),
    url(r'^report-missing-component/(\d+)/$',  report_missing_component, name="report_missing_component"),
    url(r'^report-missing-component/reply/(\d+)/$',  report_missing_component_reply, name="report_missing_component_reply"),
    url(r'^report-missing-component/list/$',  report_missing_component_list, name="report_missing_component_list"),

]