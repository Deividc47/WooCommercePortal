( function ( wc ) {
    if ( ! wc ) {
        return;
    }

    const settings = wc.wcSettings.getSetting( 'visanet_gateway_data', {} );
    const defaultLabel = 'PORTAL - Pago con tarjeta Débito/Crédito';
    const label = settings.title || defaultLabel;

    // Creamos un elemento simple para la descripción en el checkout
    const content = document.createElement( 'div' );
    content.innerHTML = settings.description || '';

    const visanetGateway = {
        name: 'visanet_gateway',
        label: label,
        content: content,
        edit: content,
        canMakePayment: () => true,
        ariaLabel: label,
        supports: {
            features: settings.supports || [],
        },
    };

    // Registramos el método de pago en el sistema de bloques de WooCommerce
    wc.wcBlocksRegistry.registerPaymentMethod( visanetGateway );
} )( window.wc );
