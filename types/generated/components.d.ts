import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedDefinition extends Struct.ComponentSchema {
  collectionName: 'components_shared_definitions';
  info: {
    description: '';
    displayName: 'Definition';
  };
  attributes: {
    paragraphs: Schema.Attribute.Component<'shared.paragraph', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
  };
  attributes: {
    body: Schema.Attribute.String;
    ctas: Schema.Attribute.Component<'shared.cta', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedParagraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_paragraphs';
  info: {
    displayName: 'Paragraph';
  };
  attributes: {
    paragraph: Schema.Attribute.Text;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedResource extends Struct.ComponentSchema {
  collectionName: 'components_shared_resources';
  info: {
    displayName: 'Resource';
  };
  attributes: {
    body: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'shared.cta', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedResourceCategory extends Struct.ComponentSchema {
  collectionName: 'components_shared_resource_categories';
  info: {
    displayName: 'Resource Category';
  };
  attributes: {
    resource_subcatgories: Schema.Attribute.Component<
      'shared.resource-sub-category',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedResourceSubCategory extends Struct.ComponentSchema {
  collectionName: 'components_shared_resource_sub_categories';
  info: {
    displayName: 'Resource Sub-category';
  };
  attributes: {
    resources: Schema.Attribute.Component<'shared.resource', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSupport extends Struct.ComponentSchema {
  collectionName: 'components_shared_supports';
  info: {
    description: '';
    displayName: 'Support';
  };
  attributes: {
    paragraphs: Schema.Attribute.Component<'shared.paragraph', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.cta': SharedCta;
      'shared.definition': SharedDefinition;
      'shared.hero-section': SharedHeroSection;
      'shared.media': SharedMedia;
      'shared.paragraph': SharedParagraph;
      'shared.quote': SharedQuote;
      'shared.resource': SharedResource;
      'shared.resource-category': SharedResourceCategory;
      'shared.resource-sub-category': SharedResourceSubCategory;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.support': SharedSupport;
    }
  }
}
