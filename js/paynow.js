// ==========================================================================
// SECURE PAY NOW PORTAL & PAYMENT GATEWAY SIMULATION
// Modeled after JungleSafariIndia /paynow with simulated Razorpay/UPI gateway
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    initPayNowPortal();
});

function initPayNowPortal() {
    const payForm = document.getElementById('payNowForm');
    const amountInput = document.getElementById('payAmount');
    const purposeSelect = document.getElementById('payPurpose');
    const bookingTokenInput = document.getElementById('payBookingToken');

    // Read URL query params (e.g., if redirected from safari-booking with token and amount)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('token') && bookingTokenInput) {
        bookingTokenInput.value = urlParams.get('token');
    }
    if (urlParams.get('amount') && amountInput) {
        amountInput.value = urlParams.get('amount');
        updatePaySummary();
    }

    if (amountInput) {
        amountInput.addEventListener('input', updatePaySummary);
    }

    if (purposeSelect) {
        purposeSelect.addEventListener('change', updatePaySummary);
    }

    if (payForm) {
        payForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const amount = parseFloat(amountInput?.value) || 0;
            if (amount <= 0) {
                showToast('Please enter a valid payment amount.', 'error');
                return;
            }
            openPaymentGatewayModal(amount);
        });
    }

    initPaymentGatewayTabs();
}

function updatePaySummary() {
    const amountInput = document.getElementById('payAmount');
    const rawAmount = parseFloat(amountInput?.value) || 0;
    
    // 5% GST on Safari & Tour Services
    const baseAmount = Math.round(rawAmount / 1.05);
    const gstAmount = rawAmount - baseAmount;

    const elBase = document.getElementById('summaryBaseAmount');
    const elGst = document.getElementById('summaryGstAmount');
    const elTotal = document.getElementById('summaryTotalAmount');

    if (elBase) elBase.textContent = `₹${baseAmount.toLocaleString()}`;
    if (elGst) elGst.textContent = `₹${gstAmount.toLocaleString()}`;
    if (elTotal) elTotal.textContent = `₹${rawAmount.toLocaleString()}`;
}

function openPaymentGatewayModal(amount) {
    const gatewayModal = document.getElementById('gatewayModal');
    if (!gatewayModal) return;

    document.getElementById('gatewayPayAmount').textContent = `₹${amount.toLocaleString()}`;
    gatewayModal.classList.add('is-open');

    // Start 5-minute countdown timer
    startGatewayTimer();
}

let timerInterval = null;
function startGatewayTimer() {
    let timeLeft = 300; // 5 minutes
    const timerDisplay = document.getElementById('gatewayCountdown');
    if (!timerDisplay) return;

    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        if (--timeLeft < 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Expired";
            showToast("Payment session timed out. Please retry.", "error");
            document.getElementById('gatewayModal')?.classList.remove('is-open');
        }
    }, 1000);
}

function initPaymentGatewayTabs() {
    const methodTabs = document.querySelectorAll('.payment-method-tab');
    const methodPanes = document.querySelectorAll('.payment-method-pane');

    methodTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            methodTabs.forEach(t => t.classList.remove('active'));
            methodPanes.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const target = tab.getAttribute('data-target');
            document.getElementById(target)?.classList.add('active');
        });
    });

    // Close Gateway Modal
    document.getElementById('gatewayCloseBtn')?.addEventListener('click', () => {
        document.getElementById('gatewayModal')?.classList.remove('is-open');
        if (timerInterval) clearInterval(timerInterval);
    });

    // Simulate Successful Payment
    document.querySelectorAll('.btn-simulate-pay').forEach(btn => {
        btn.addEventListener('click', () => {
            const originalText = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = '<i data-lucide="loader-2" class="spin"></i> Processing Authorization...';
            if (window.lucide) { window.lucide.createIcons(); }

            setTimeout(() => {
                btn.disabled = false;
                btn.innerHTML = originalText;
                if (window.lucide) { window.lucide.createIcons(); }
                document.getElementById('gatewayModal')?.classList.remove('is-open');
                if (timerInterval) clearInterval(timerInterval);
                showPaymentSuccessReceipt();
            }, 1200);
        });
    });
}

function showPaymentSuccessReceipt() {
    const receiptModal = document.getElementById('receiptModal');
    if (!receiptModal) return;

    const txId = 'TXN-' + Math.floor(100000000 + Math.random() * 900000000);
    const amount = document.getElementById('payAmount')?.value || '5500';
    const payerName = document.getElementById('payPayerName')?.value || 'Authorized Traveler';
    const token = document.getElementById('payBookingToken')?.value || ('JS-' + Math.floor(100000 + Math.random() * 900000));

    document.getElementById('receiptTxId').textContent = txId;
    document.getElementById('receiptAmount').textContent = `₹${parseFloat(amount).toLocaleString()}`;
    document.getElementById('receiptPayer').textContent = payerName;
    document.getElementById('receiptToken').textContent = token;
    document.getElementById('receiptDate').textContent = new Date().toLocaleString();

    receiptModal.classList.add('is-open');

    showToast('Payment successful! Your official booking tax invoice has been generated.', 'success');
}
