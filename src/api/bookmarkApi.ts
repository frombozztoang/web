import { user } from '@/class/user';

const accessToken = user.getAccessToken();

export const postBankBookmarkApi = async (financial_product_id: number) => {
  const url = `https://api.finfellows.co.kr/bookmarks/financial-products/${financial_product_id}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log('[✅postBankBookmarkApi API Data]', data);
      return data.data;
    } else {
      console.error('[💥postBankBookmarkApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥postBankBookmarkApi Error]', error);
    return undefined;
  }
};

export const deleteBankBookmarkApi = async (financial_product_id: number) => {
  const url = `https://api.finfellows.co.kr/bookmarks/financial-products/${financial_product_id}`;

  try {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log('[✅deleteBankBookmarkApi API Data]', data);
      return data.data;
    } else {
      console.error('[💥deleteBankBookmarkApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥deleteBankBookmarkApi Error]', error);
    return undefined;
  }
};

export const postEducationBookmarkApi = async (post_id: number, contentType: 'EDU_CONTENT' | 'NEWS_CONTENT') => {
  const url = `https://api.finfellows.co.kr/bookmarks/posts/${post_id}?contentType=${contentType}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log('[✅postEducationBookmarkApi API Data]', data);
      return data.data;
    } else {
      console.error('[💥postEducationBookmarkApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥postEducationBookmarkApi Error]', error);
    return undefined;
  }
};

export const deleteEducationBookmarkApi = async (post_id: number, contentType: 'EDU_CONTENT' | 'NEWS_CONTENT') => {
  const url = `https://api.finfellows.co.kr/bookmarks/posts/${post_id}?contentType=${contentType}`;

  try {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log('[✅deleteEducationBookmarkApi API Data]', data);
      return data.data;
    } else {
      console.error('[💥deleteEducationBookmarkApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥deleteEducationBookmarkApi Error]', error);
    return undefined;
  }
};

export const postPolicyBookmarkApi = async (policy_info_id: number) => {
  const url = `https://api.finfellows.co.kr/bookmarks/policy-info/${policy_info_id}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log('[✅postPolicyBookmarkApi API Data]', data);
      return data.data;
    } else {
      console.error('[💥postPolicyBookmarkApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥postPolicyBookmarkApi Error]', error);
    return undefined;
  }
};

export const deletePolicyBookmarkApi = async (post_id: number) => {
  const url = `https://api.finfellows.co.kr/bookmarks/policy-info/${post_id}`;

  try {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log('[✅deletePolicyBookmarkApi API Data]', data);
      return data.data;
    } else {
      console.error('[💥deletePolicyBookmarkApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥deletePolicyBookmarkApi Error]', error);
    return undefined;
  }
};

export const postCmaBookmarkApi = async (cma_id: number) => {
  const url = `https://api.finfellows.co.kr/bookmarks/posts/${cma_id}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log('[✅postCmaBookmarkApi API Data]', data);
      return data.data;
    } else {
      console.error('[💥postCmaBookmarkApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥postCmaBookmarkApi Error]', error);
    return undefined;
  }
};

export const deleteCmaBookmarkApi = async (cma_id: number) => {
  const url = `https://api.finfellows.co.kr/bookmarks/financial-products/${cma_id}`;

  try {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log('[✅deleteCmaBookmarkApi API Data]', data);
      return data.data;
    } else {
      console.error('[💥deleteCmaBookmarkApi API Error]', res.status, res.statusText);
      return undefined;
    }
  } catch (error) {
    console.error('[💥deleteCmaBookmarkApi Error]', error);
    return undefined;
  }
};
