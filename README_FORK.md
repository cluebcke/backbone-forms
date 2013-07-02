#backbone-forms: cluebcke fork

This fork of backbone-forms adds support for a new attribute, data-i18n, for form labels (currently) and other text
that may need to be localized (future). The intention is to provide this support without having to provide custom
templates for each form, which would obviate much of the benefit that backbone-forms brings.

This is a very specific change for one specific application. The change does not actually provide any localization
support, but simply adds an attribute. The biggest TODO here would be to provide general support for additional
attributes without having to customize templates.