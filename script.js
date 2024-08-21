"use strict"
// System de gestion d'une bibliothèque municipale

// 1- Gestion des livres

// const bibliotheque = {
//     book: livres,
//     members: membres,
//     loan: emprunts,
//     return: retours
// }

const books = [
    {
        titre:"Reflechir et devenir riche", 
        categorie:"Developpement personnel", 
        auteur: "Napoleon H"
    },
    {
        titre: "Strategie UX",
        categorie:"Developpement",
        auteur:"Ibrahima"
    },
    ]
// AJouter des nouveaux livres
function addBooks(titre, categorie, auteur){
    const findBook = books.find((item) => item.titre === titre)
    if (findBook){
        console.log(`Le livre ${titre} existe déjà`)
    }else{
        const book = {
            titre: titre, 
            categorie: categorie,
            auteur: auteur
        }
        books.push(book)
        console.log(`Le livre ${titre} est ajouté avec succès !`)
    }
}

addBooks("offre",'Developpement', 'ramadane')

// Supprimer des livres
function deleteBook(titre){
    const findBook = books.find((item) => item.titre === titre)
    if (findBook){
        const indexBook = books.indexOf(findBook)
        books.splice(indexBook,1)
        console.log(`Le livre ${titre} est supprimé avec succès !`)
    }else {
        console.log(`Le livre ${titre} n'exite pas !`)
    }
}
deleteBook("Reflechir et devenir riche")

// Mettre à jour les informations de livres
function updateBook(titre, categorie, auteur){
    const findBook = books.find((item) => item.titre === titre)
    if (findBook){
        (findBook.titre = titre),
        (findBook.categorie = categorie),
        (findBook.auteur = auteur)
        console.log(`Le livre ${titre} est modifié avec succès `)
    }else {
        console.log(`Le livre ${titre} n'exite pas !`)
    }
}

updateBook("Strategie UX","science", "ramadane")

// Rechercher un livre à partir du categorie
function searchBook(categorie){
    const findBook = books.find((item) => item.categorie === categorie)
    const filterBook = books.filter((item) => item.categorie === categorie)
    if (findBook && filterBook){
        console.log(`Le livre qui a pour categorie ${categorie} est :`)
        
    }else {
        console.log(`Le livre avec la categorie ${categorie} n\'existe pas`)
    }
    return filterBook
}
console.log(searchBook('science'))

// console.log(books)

// 2- Gestion des membres
const members = [
    {
        name: "Ramadane",
        numberOfMembers: 1
    },
    {
        name: "Ibrahima",
        numberOfMembers: 2
    },
    {
        name: "Money never lie",
        numberOfMembers: 3
    }
]

// Inscrire un nouveau membre
function newMember(name, numberOfMembers){
    const findMember = members.find((item) => item.name === name)
    if (findMember){
        console.log(`Le membre ${name} existe déjà`)
    }else {
        const member={
            name: name,
            numberOfMembers: numberOfMembers
        }
        members.push(member)
        console.log(`Le membre ${name} est inscrit avec succès !`)
    }
}

newMember("Ramadane",)


// Mettre à jour les informations des membres
function upadateMember(name, numberOfMembers){
    const findMember = members.find((item) => item.name === name)
    if (findMember){
        (findMember.name = name),
        (findMember.numberOfMembers = numberOfMembers)
        console.log(`Le membre ${name} est mis à jour avec succès `)
    }else {
        console.log(`Le membre ${name} n'existe pas`)
    }
}

upadateMember("Ibrahima", 2)

// Supprimer des membres
function deleteMember(name){
    const findMember = members.find((item) => item.name === name)
    if(findMember){
        const indexMembre = members.indexOf(findMember)
        members.splice(indexMembre,1)
        console.log(`Le membre ${name} est supprimé avec succès `)
    }else {
        console.log(`Le membre ${name} n'existe pas `)
    }
}

deleteMember('Ramadane')

// Rechercher des membres par nom
function searchMember(name){
    const findMember = members.find((item) => item.name === name)
    const filterMember = members.filter((item) => item.name === name)
    if (findMember && filterMember){
        console.log(`Le membre qui a pour nom ${name} est :`)
    }else {
        console.log(`Le membre ${name} n'existe pas:`)
    }

    return filterMember
}

console.log(searchMember('Ibrahima'))
console.log(members)

// Systeme d'emprunt et de retour
let emprunts = []
function saveEmprunt(idMembre, bookTitle,categorie,auteur,jour,mois,annee){
    const findBook = books.findIndex((item) => item.titre === bookTitle)
    const findMember = members.find((item) => item.numberOfMembers === idMembre)

    if (findBook !== -1 && findMember){
        const emprunt = {
            idMembre,
            bookTitle,
            categorie,
            auteur,
            dateEmprunt:{
                jour,
                mois,
                annee
            }
        }
        emprunts.push(emprunt)
        books.splice(findBook, 1)
    }else {
        console.log(`Le livre ${bookTitle}  ou le membre ${idMembre} n'existe pas`)
    }
}

saveEmprunt(2,"Strategie UX","science","ramadane",1,4,2024)
console.log(emprunts)

//console.log(emprunts)
//console.log(books)
let retours=[]
function saveReturnBook(titre,categorie,auteur,jour,mois,annee){
    
    const index=emprunts.findIndex(item=>item.bookTitle===titre)
    if(index!==-1){
        addBooks(titre,categorie,auteur)
        const retour={
            titre,
            dateRetour:{
                jour:jour,
                mois:mois,
                annee:annee
            }
        }
        
        retours.push(retour)
        emprunts.splice(index,1)
        console.log("le livre a été retourné avec succès")
        
    }else {
        console.log("Le livre n'a pas été trouvé dans les emprunts");
        
    }
}
    
//saveReturnBook("Strategie UX","science","ramadane",4,5,2024)
console.log(retours)

console.log(books)

//verification de la disponibilité d'un livre

function verifierDispoLivre(titre){
    const index=books.findIndex(item=>item.titre===titre)
    if(index!==-1){
        console.log(`Le livre ayant le titre ${titre} est disponible`)
    }else{
        console.log(`Erreur: le livre n'est pas disponible`)
    }
}

verifierDispoLivre("Strategie ")

/*function calcFraisRetard(fraisJour,titre){
    const index=emprunts.findIndex(item=>item.bookTitle===titre)
    const indexR=retours.findIndex(item=>item.titre===titre)
    console.log(index)
    console.log(retours[indexR].mois)
    console.log(emprunts[index].dateEmprunt.mois)
   const prix=20000
   let annee,mois,jour,nbJours,fraisRetard
   if(index!==-1){
    annee=retours[indexR].annee-emprunts[index].dateEmprunt.annee
    mois=retours[indexR].mois-emprunts[index].dateEmprunt.mois
    jour=retours[indexR].jour-emprunts[index].dateEmprunt.jour
    
    nbJours=jour+mois*30+annee*365
   }
   if(nbJours>30){
    nbJours=nbJours-30
    fraisRetard=nbJours*fraisJour
    console.log(`le frais de retard est de ${fraisRetard}`)
   }else{
    console.log("Il n y a pas de frais")
   }
    //const mois=retours.mois-emprunts.
}*/

// 4- Gestion des reservations
const reservations = []
// Permettre aux membres de reserver des livres indisponibles
function reservation(titre, idMembre){
    const findBook=books.find(item=>item.titre===titre)
    const findMember=members.find(item=>item.numberOfMembers===idMembre)
    const findEmprunt= emprunts.find(item=>item.bookTitle===titre)

    if(findBook && !findEmprunt && findMember){
        console.log('Pas besoin de reserver, le livre est disponible')
    }else if((!findBook || !findMember) && !findEmprunt){
        console.log('Reservation impossible ')
    }
    else {
        const reservation = {
            titre,
            idMembre
        }
        reservations.push(reservation)
        console.log(`Le livre ${titre} a été bien reservé pour le membre ${idMembre}`)
    }
}

reservation('Strategie UX', 3)
console.log(reservations)

// Gestion d'une liste d'attente pour les membres
function gererListeAttente(titre){
    for (let i = 0; i < reservations.length; i++){
        if (reservations[i].titre === titre) {
            saveEmprunt(titre, reservations[i].idMembre);
            reservations.splice(i, 1);
        }
    }
}

gererListeAttente('offre')



