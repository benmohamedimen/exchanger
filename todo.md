Fonctionnalités demandées:
DONE :   1. Afficher une valeur qui représentera le taux de change EUR / USD. Elle sera initialisée à 1.1.
Toutes les 3 secondes, une valeur aléatoire entre -0.05 et +0.05 sera ajoutée ou soustraite à la valeur initiale.
DONE :   2. Réaliser un front permettant de saisir un montant en EUR et affichant sa valeur en USD sur la base du taux de change
DONE :   3. Mettre en place un polling régulier permettant la mise à jour de la partie USD en fonction de l’actualisation du taux de change
DONE :   4. Ajouter un switch permettant de saisir un montant en USD à la place du montant en EUR : a. Switch réglé sur "EUR": le montant saisi est en Euro, la valeur affichée est en USD
         b. Switch réglé sur "USD": le montant saisi est en Dollar, la valeur affichée est en EUR
DONE :   5. S'assurer de la continuité des valeurs: si le switch est activé, la nouvelle entrée devient l'ancienne sortie
DONE :   6. Ajouter un champ permettant de fixer (force) un taux de change
DONE :   7. Désactiver le taux de change fixe (si actif) lors d'une variation de plus de 2% avec le taux réel. La conversion sera alors effectuée en prenant en compte le taux réel.
DONE :   8. Ajouter un tableau d’historique des 5 dernières demandes de conversion calculées. Le tableau affichera le taux réel, le taux saisi, la valeur initiale avec la devise associée et la valeur calculée avec la devise associée.
 *******************
 *******************

Fonctionnalités restantes : 0
 *******************
 *******************

Améliorations à apporter :

Optimisation du polling : Améliorer la gestion des mises à jour du taux de change pour réduire l'impact sur les performances.

Affichage UX/UI : Ajouter des animations pour rendre la mise à jour du taux de change plus fluide et intuitive.

Validation des entrées utilisateur : Vérifier que les montants saisis sont bien des nombres valides et afficher des messages d'erreur en cas de saisie incorrecte.

Sauvegarde des préférences : Permettre la sauvegarde du mode de conversion (EUR->USD ou USD->EUR) entre les sessions.

Tests unitaires et d'intégration : Ajouter des tests pour s'assurer du bon fonctionnement des conversions et du maintien des fonctionnalités.

Gestion des erreurs : Ajouter des alertes ou messages en cas d'erreur lors du polling ou de la conversion.

Refactorisation du code : Améliorer la structure du code pour le rendre plus modulaire et maintenable.
 *******************
 *******************

Raccourcis pris :
ui inspipré depuis le site https://www.xe.com/
Pas d'error Handling
Pas de gestion avancée des styles : L'interface actuelle est fonctionnelle mais peut être améliorée en termes de design et d'accessibilité, 
il est indispensable d'ajouter le support du traduction (i18n), 
l'interface n'est pas adaptée aux appareils mobiles. Il est nécessaire d'ajouter de la responsivité pour améliorer l'expérience utilisateur.
Pas de backend : Tout est géré en frontend, ce qui pourrait poser problème en cas d'évolution du projet nécessitant une persistance des données.
Polling constant : Pas d'optimisation pour détecter si l'utilisateur est inactif afin de réduire les appels inutiles.
 *******************
 *******************
 
UX experience improvement : 

Si l'utilisateur a choisi de forcer le taux de change et qu'une variation de plus de 2 % est détectée, une popup s'affiche pour l'informer de ce changement et lui proposer de basculer vers le taux réel. Il peut alors décider de continuer avec le taux forcé ou d'adopter le taux réel.
