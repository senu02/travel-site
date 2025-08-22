import type { Schema, Struct } from "@strapi/strapi";

export interface HomeSectionsHeroSection extends Struct.ComponentSchema {
  collectionName: "components_home_sections_hero_sections";
  info: {
    displayName: "Hero_Section";
  };
  attributes: {
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    sub_heading: Schema.Attribute.String;
    video: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
  };
}

export interface HomeSectionsLatestTravelStories
  extends Struct.ComponentSchema {
  collectionName: "components_home_sections_latest_travel_stories";
  info: {
    displayName: "Latest_Travel_Stories";
  };
  attributes: {
    blogs: Schema.Attribute.Relation<"oneToMany", "api::blog.blog">;
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
  };
}

export interface HomeSectionsOtherStories extends Struct.ComponentSchema {
  collectionName: "components_home_sections_other_stories";
  info: {
    displayName: "Other_Stories";
  };
  attributes: {
    blogs: Schema.Attribute.Relation<"oneToMany", "api::blog.blog">;
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: "components_shared_media";
  info: {
    displayName: "Media";
    icon: "file-video";
  };
  attributes: {
    file: Schema.Attribute.Media<"images" | "files" | "videos">;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: "components_shared_quotes";
  info: {
    displayName: "Quote";
    icon: "indent";
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: "components_shared_rich_texts";
  info: {
    description: "";
    displayName: "Rich text";
    icon: "align-justify";
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: "components_shared_seos";
  info: {
    description: "";
    displayName: "Seo";
    icon: "allergies";
    name: "Seo";
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<"images">;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: "components_shared_sliders";
  info: {
    description: "";
    displayName: "Slider";
    icon: "address-book";
  };
  attributes: {};
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "home-sections.hero-section": HomeSectionsHeroSection;
      "home-sections.latest-travel-stories": HomeSectionsLatestTravelStories;
      "home-sections.other-stories": HomeSectionsOtherStories;
      "shared.media": SharedMedia;
      "shared.quote": SharedQuote;
      "shared.rich-text": SharedRichText;
      "shared.seo": SharedSeo;
      "shared.slider": SharedSlider;
    }
  }
}
