#!/usr/bin/env python
# -*- coding: utf-8 -*-
'''
Auth Bootstrap
'''
from __future__ import absolute_import

from .celery import app as celery_app

__version__ = '0.0.1'
__description__ = 'Auth Bootstrap API'
__all__ = ['celery_app']
