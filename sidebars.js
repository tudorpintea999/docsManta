/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docs: [
    'Introduction',
    {
      type: 'category',
      label: 'Manta',
      items: ['manta/Overview'],
    },
    {
      type: 'category',
      label: 'Calamari',
      items: [
        'calamari/Overview',
        'calamari/KMA',
        'calamari/Governance',
        'calamari/API',
        'calamari/CrowdloanClaim' 
      ],
    },
    {
      type: 'category',
      label: 'Dolphin',
      items: [
        'dolphin/Overview',
        {
          type: 'category',
          label: 'Projects',
          items: [
            'dolphin/projects/Experiments',
            'dolphin/projects/PrivatePayment',
            'dolphin/projects/PrivateExchange',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Signer',
      items: [
        'signer/Overview',
        'signer/HowToUseIt',
      ],
    },
  ],
};
