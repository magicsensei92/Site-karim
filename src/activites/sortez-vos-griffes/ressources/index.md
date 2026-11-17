---
title: "Ressources"
titre_menu: "Ressources (brouillon)"
surtitre: "Sortez vos griffes"
chapo: "Des pages pratiques pour comprendre, se protéger au quotidien et connaître ses droits. Elles sont en cours de vérification et ne seront publiées qu'après validation."
ordre: 9
brouillon: true
relecture_juridique: true
---
<ul class="grille-cartes">
{%- for p in collections.pagesActivites %}
  {%- if p.data.activite == "sortez-vos-griffes" and p.data.cacherDuMenu and p.url %}
  <li class="carte-simple"><h3><a href="{{ p.url }}">{{ p.data.titre_menu }}</a></h3><p>{{ p.data.title }}</p></li>
  {%- endif %}
{%- endfor %}
</ul>

<div class="encadre">
La page sur les protections de l'État (ordonnance de protection, téléphone grave danger…) n'est pas reprise ici : elle doit d'abord être relue par une juriste et une association.
</div>
