"use strict"

import fs from 'fs';


/**
 * Classe de configuration contenant l'ensemble des
 * constantes et des variables configurables
 */
export default class Configuration {}


/*
 * Constante représentant les textes des tweets pour arrêter ou démarrer léa
 * Cela représente aussi le texte qu'affiche Léa quand elle est en pause.
 */
Configuration.USER_TWITTER = '@lea_nmakers';
Configuration.TWEET_LEA_START = Configuration.USER_TWITTER + ' start';
Configuration.TWEET_LEA_STOP = Configuration.USER_TWITTER + ' stop';

Configuration.TEXT_LEA_PAUSE = '  Lea est en pause     elle se repose';

Configuration.TEXT_LEA_START = '  Tweetez moi sur                          ' + Configuration.USER_TWITTER;

