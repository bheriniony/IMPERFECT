# client

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## terraform
 .tfstate : fichier contenant tt les cofing condensés 
 Peut définir des vars output 

## ansible

On peut y déclarer des modules ,state - présence

Chapitres ( rôles) -> déclaration
 Argo cd --- listener de changement pipeline gitlab


Disaster recovery : force de k8s,. On peut faire un 

Des l'instant où veut des.replicats ou de lautoscaling -- k8s

Pas de tU mais des outils pour faire des ti : terratest

Why not tf only -- un outil, un usage


Helm : kubernetes package management 

Ansible est très strict au nommage, fichier et package

Etat du pipeline avec tf et ansible en place 
( Image ici)
Avec k8s, on kill et on déploie de nouveaux pods, on ne fait pas de restant - livecycle


Db : ajout dB as service via k8s : création d'un ressource, et un dB operator 

Les operators étendent les choses qu'on peut faire par k8s

Helm est aussi un template engine
 Insert image pipeline

On peut ajouter une étape deploy ( cmd helm)

## gitops

Synchroniser l'état du code avec l'état réel : git.devient Source de vérité


Gitops en mode push : déployer sur l'Infra avec un click 

Qu'est ce qui se passe quand on modifie sur l'applicatif
Use ArgoCD , vit dans le cluster tech
Argo cd permet de faire la synchro entre les.modfs en direct et notre infra as code 



