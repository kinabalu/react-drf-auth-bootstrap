from __future__ import absolute_import, unicode_literals
from celery import shared_task

from django.conf import settings

from .emails import send_feedback_email, send_user_email
from celery.utils.log import get_task_logger

import time

logger = get_task_logger(__name__)

@shared_task(name="send_register_email_task")
def send_register_email_task(email, message):
    """sends an email upon registration form filled successfully"""
    logger.info("Sent feedback email")
    return send_feedback_email(email, message)

@shared_task(name="send_user_email_task")
def send_user_email_task(email_data, prefix):
    """sends an email"""

    logger.info("Sending email")
    return send_user_email(email_data, prefix)
