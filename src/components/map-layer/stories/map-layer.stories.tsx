const LAYER_OPTIONS = [
  ['./dist/gcds-map/assets/mapml/en/cbmtile/toporama', 'Toporama'],
  ['./dist/gcds-map/assets/mapml/en/cbmtile/cbmt', 'Canada Base Map - Transportation'],
  ['./dist/gcds-map/assets/mapml/en/osmtile/osm', 'OpenStreetMap'],
  ['./dist/gcds-map/assets/mapml/en/osmtile/current_conditions', 'Current Weather Conditions'],
];

const layerMap = LAYER_OPTIONS.reduce((obj, [url, title]) => {
  obj[title] = url;
  return obj;
}, {});

export default {
  title: 'Components/Layer',

  argTypes: {
    src: {
      name: 'src',
      control: 'select',
      options: Object.keys(layerMap),
      mapping: layerMap,
      description:
        'A URL to a MapML document. When set, layer content is fetched remotely. When absent, layer content is provided inline as child elements. | ' +
        "Une URL vers un document MapML. Lorsque défini, le contenu de la couche est récupéré à distance. Lorsqu'absent, le contenu est fourni en ligne comme éléments enfants.",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    label: {
      name: 'label',
      control: { type: 'text' },
      description:
        'The layer name displayed in the layer control. If not set, the name is derived from the remote MapML document\'s <map-title> element. | ' +
        'Le nom de la couche affiché dans le contrôle de couche. Si non défini, le nom est dérivé de l\'élément <map-title> du document MapML distant.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    checked: {
      name: 'checked',
      control: 'boolean',
      description:
        'When present, the layer is displayed on the map and its checkbox is checked in the layer control. | ' +
        'Lorsque présent, la couche est affichée sur la carte et sa case est cochée dans le contrôle de couche.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hidden: {
      name: 'hidden',
      control: 'boolean',
      description:
        'When present, the layer is hidden from the layer control but remains visible on the map (if checked). Useful to reduce cognitive load by hiding basemap layers. | ' +
        "Lorsque présent, la couche est masquée du contrôle de couche mais reste visible sur la carte (si cochée). Utile pour réduire la charge cognitive en masquant les couches de fond.",
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    opacity: {
      name: 'opacity',
      control: { type: 'range', min: 0, max: 1, step: 0.05 },
      description:
        'A number between 0 and 1 controlling the layer opacity. 0 is fully transparent, 1 is fully opaque. | ' +
        "Un nombre entre 0 et 1 contrôlant l'opacité de la couche. 0 est entièrement transparent, 1 est entièrement opaque.",
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    media: {
      name: 'media',
      control: { type: 'text' },
      description:
        'A map media query string. When specified, the layer is only active when the media query matches the current map state (e.g. zoom level). | ' +
        "Une chaîne de requête média de carte. Lorsque spécifiée, la couche n'est active que lorsque la requête correspond à l'état actuel de la carte (p. ex. niveau de zoom).",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    projection: {
      name: 'projection (map)',
      control: { type: 'select' },
      options: ['OSMTILE', 'CBMTILE', 'APSTILE', 'WGS84'],
      description:
        'The projection of the parent gcds-map. Layers must match the map projection or provide an alternate link. | ' +
        'La projection du gcds-map parent. Les couches doivent correspondre à la projection de la carte ou fournir un lien alternatif.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'OSMTILE' },
      },
    },
  },
};

// spacing and indentation is visually significant in the template (it's visible in the
// "Show Code" disclosure widget; don't change it without testing the result...)
const TemplateRemote = (args) => {
  return `<!-- Web component code (HTML, Angular, Vue) -->
<gcds-map lat="${args.lat}" lon="${args.lon}" zoom="${args.zoom}" projection="${args.projection}" controls>

  <map-layer src="${args.src}"${args.label ? ` label="${args.label}"` : ''}${args.checked ? ' checked' : ''}${args.hidden ? ' hidden' : ''}${args.opacity < 1 ? ` opacity="${args.opacity}"` : ''}${args.media ? ` media="${args.media}"` : ''}></map-layer>

</gcds-map>
<!-- React code -->`;
};

export const RemoteLayer: any = TemplateRemote.bind({});
RemoteLayer.args = {
  lat: 53.087426,
  lon: -91.27533,
  zoom: 4,
  projection: 'OSMTILE',
  src: './dist/gcds-map/assets/mapml/en/osmtile/cbmt',
  label: '',
  checked: true,
  hidden: false,
  opacity: 1,
  media: '',
};
