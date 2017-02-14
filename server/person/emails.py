from django.conf import settings
from django.core.mail import EmailMessage
from django.template import Context
from django.template.loader import render_to_string

from django.core.mail.message import EmailMultiAlternatives
from django.core.mail import send_mail

def send_user_email(email_data, prefix):
    import pprint
    pprint.pprint(email_data)
    subject_file = '%s_subject.txt' % prefix
    txt_file = '%s.txt' % prefix
    html_file = '%s.html' % prefix

    subject = render_to_string(subject_file).strip()
    from_email = settings.DEFAULT_EMAIL_FROM
    to = email_data['email']
    bcc_email = settings.DEFAULT_EMAIL_BCC

    # Make some context available
    ctxt = {
        'email': email_data['email'],
        'first_name': email_data['first_name'],
        'last_name': email_data['last_name'],
        'code': email_data['code'],
        'WEB_URL': email_data['WEB_URL']
    }
    text_content = render_to_string(txt_file, ctxt)
    html_content = render_to_string(html_file, ctxt)

    msg = EmailMultiAlternatives(subject, text_content, from_email, [to],
              bcc=[bcc_email])
    msg.attach_alternative(html_content, 'text/html')
    return msg.send()


def send_feedback_email(email, message):
    print('Got here....muthafucka!')
    # c = Context({'email': email, 'message': message})
    #
    # email_subject = render_to_string(
    #     'feedback/email/feedback_email_subject.txt', c).replace('\n', '')
    # email_body = render_to_string('feedback/email/feedback_email_body.txt', c)
    #
    # email = EmailMessage(
    #     email_subject, email_body, email,
    #     [settings.DEFAULT_FROM_EMAIL], [],
    #     headers={'Reply-To': email}
    # )
    # return email.send(fail_silently=False)
