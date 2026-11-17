---
title: "Contact"
layout: page.njk
permalink: /contact/
chapo: "Pour une inscription, une intervention en entreprise, en établissement ou dans les médias."
---

<dl class="fiche">
  <dt>E-mail</dt><dd>{% if site.contact_email %}<a href="mailto:{{ site.contact_email }}">{{ site.contact_email }}</a>{% else %}<span class="a-venir">À venir</span>{% endif %}</dd>
  <dt>Téléphone</dt><dd>{% if site.contact_telephone %}{{ site.contact_telephone }}{% else %}<span class="a-venir">À venir</span>{% endif %}</dd>
  <dt>Facebook</dt><dd>{% if site.facebook %}<a href="{{ site.facebook }}">Page Facebook de Karim</a>{% else %}<span class="a-venir">À venir</span>{% endif %}</dd>
  <dt>YouTube</dt><dd>{% if site.youtube %}<a href="{{ site.youtube }}">Chaîne YouTube</a>{% else %}<span class="a-venir">À venir</span>{% endif %}</dd>
</dl>

<div class="encadre">
Pour Sortez vos griffes, le lieu et les horaires des cours sont communiqués uniquement à l'inscription. En cas de danger, appelez le 17 ou le 112.
</div>
