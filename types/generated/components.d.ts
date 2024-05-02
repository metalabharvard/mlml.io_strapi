import type { Schema, Attribute } from '@strapi/strapi';

export interface AliasesAliases extends Schema.Component {
  collectionName: 'components_aliases_aliases';
  info: {
    icon: 'align-left';
    description: '';
    displayName: 'Aliases';
  };
  attributes: {
    Aliases: Attribute.String & Attribute.Unique;
  };
}

export interface CollabortorCollaborators extends Schema.Component {
  collectionName: 'components_collabortor_collaborators';
  info: {
    icon: 'globe-africa';
    description: '';
    displayName: 'collaborators';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
  };
}

export interface FunderFunders extends Schema.Component {
  collectionName: 'components_funder_funders';
  info: {
    icon: 'money-bill-alt';
    displayName: 'funders';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
  };
}

export interface KeywordKeywords extends Schema.Component {
  collectionName: 'components_keyword_keywords';
  info: {
    icon: 'grip-horizontal';
    displayName: 'keywords';
  };
  attributes: {
    keyword: Attribute.String;
  };
}

export interface LinkLinks extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    icon: 'project-diagram';
    description: '';
    displayName: 'Links';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
  };
}

export interface PressLinkPress extends Schema.Component {
  collectionName: 'components_press_link_presses';
  info: {
    icon: 'align-justify';
    description: '';
    displayName: 'Press';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
  };
}

export interface ProjectProject extends Schema.Component {
  collectionName: 'components_project_projects';
  info: {
    icon: 'asterisk';
    displayName: 'project';
  };
  attributes: {
    projects: Attribute.Relation<
      'project.project',
      'oneToMany',
      'api::project.project'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'aliases.aliases': AliasesAliases;
      'collabortor.collaborators': CollabortorCollaborators;
      'funder.funders': FunderFunders;
      'keyword.keywords': KeywordKeywords;
      'link.links': LinkLinks;
      'press-link.press': PressLinkPress;
      'project.project': ProjectProject;
    }
  }
}
